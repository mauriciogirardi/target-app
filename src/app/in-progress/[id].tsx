import { Button } from "@/components/Button"
import { List } from "@/components/List"
import { Loading } from "@/components/Loading"
import { PageHeader } from "@/components/PageHeader"
import { Progress } from "@/components/Progress"
import { Transaction, TransactionData } from "@/components/Transaction"
import { useTargetDatabase } from "@/database/useTargetDatabase"
import { numberToCurrency } from "@/utils/numberToCurrency"
import { TransactionTypes } from "@/utils/TransactionTypes"
import { router, useFocusEffect, useLocalSearchParams } from "expo-router"
import { useCallback, useState, useTransition } from "react"
import {  Alert, View } from "react-native"

const transactions: TransactionData[] = [
  {id: '1', value: 'R$ 100,00', date: '12/04/25', description: 'CDB de 110% no banco XPTO', type: TransactionTypes.Input},
  {id: '2', value: 'R$ 200,00', date: '12/04/25', type: TransactionTypes.Output},
]

export default function InProgress() {
  const params = useLocalSearchParams<{id: string}>()
  const [isPending, startTransition] = useTransition()

  const [details, setDetails] = useState({
    name: '',
    current: numberToCurrency(0),
    target: numberToCurrency(0),
    percentage: 0
  })

  const targetDatabase = useTargetDatabase()

  function fetchDetails(){
    startTransition(async () => {
      try {
        const response = await targetDatabase.show(Number(params.id))
        setDetails({
          name: response.name,
          current: numberToCurrency(response.current),
          target: numberToCurrency(response.amount),
          percentage: response.percentage
        })
      } catch (e){
        console.log(e)
        Alert.alert('Error', 'Não foi possível carregar os detalhes da meta.')
      }
    })
  }

  useFocusEffect(
    useCallback(() => {
      fetchDetails()
    }, [])
  )

  if (isPending) return <Loading />

  return (
    <View style={{ flex:1, padding: 24, gap: 32}}>
      <PageHeader 
        title={details.name}
        rightButton={{
          icon: 'edit',
          onPress: () => router.navigate(`/target?id=${params.id}`)
        }}
      />

      <Progress data={details} />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => <Transaction data={item} onRemove={() => {}}/>}
        keyExtractor={(item) => item.id}
        emptyMessage="Nenhuma transação. Toque em nova transação para guardar seu primeiro dinheiro aqui."
      />

      <Button
        title="Nova transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  )
}
