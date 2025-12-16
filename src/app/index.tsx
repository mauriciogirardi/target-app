import { Button } from "@/components/Button"
import { HomeHeader } from "@/components/HomeHeader"
import { List } from "@/components/List"
import { Loading } from "@/components/Loading"
import { Target, TargetData } from "@/components/Target"
import { useTargetDatabase } from "@/database/useTargetDatabase"
import { numberToCurrency } from "@/utils/numberToCurrency"
import { router, useFocusEffect } from "expo-router"
import { useCallback, useState } from "react"
import { Alert, StatusBar, View } from "react-native"

const summary = {
  total: 'R$ 2.400,98',
  input: { label: 'Entradas', value: 'R$: 2.000,00' },
  output: { label: 'Saídas', value: '-R$: 2.000,00' },
}

export default function Index() {
  const [targets, setTargets] = useState<TargetData[]>([])
  const [isFetching, setIsFetching] = useState(true)

  const targetDatabase = useTargetDatabase()

  const fetchTargets = async (): Promise<TargetData[]> => {
    try {
      const response = await targetDatabase.listBySavedValue()
      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        current: numberToCurrency(item.current),
        percentage: item.percentage.toFixed(0) + '%',
        target: numberToCurrency(item.amount)
      }))
    } catch {
       Alert.alert("Error", "Não foi possível carregar as metas.")
    } finally {
      setIsFetching(false)
    }
  }

  const fetchData = async () => {
    const targetDataPromise = fetchTargets()

    const [targetData] = await Promise.all([ targetDataPromise ])

    setTargets(targetData)
  }

  useFocusEffect(
    useCallback(() => {
      fetchData()
    }, [])
  )

  if (isFetching) return <Loading />
  
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content"/>
      <HomeHeader data={summary}/>

      <List
        title="Metas"
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)}/>}
        containerStyle={{ paddingHorizontal: 24 }}
        emptyMessage="Nenhuma meta. Toque em nova meta para criar."
      />
      
      <View style={{ padding: 24, paddingBottom: 32}}>
        <Button
          title="Nova meta"
          onPress={() => router.navigate('/target')}
        />
      </View>
    </View>
  )
}
