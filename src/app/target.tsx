import { Button } from "@/components/Button"
import { CurrencyInput } from "@/components/CurrencyInput"
import { Input } from "@/components/Input"
import { PageHeader } from "@/components/PageHeader"
import { useTargetDatabase } from "@/database/useTargetDatabase"
import { router, useLocalSearchParams } from "expo-router"
import { useState } from "react"
import { Alert, View } from "react-native"

const initialValue = {
    name: '',
    amount: 0
  }

export default function Target() {
  const params = useLocalSearchParams<{id?: string}>()
  const [isProcessing, setIsProcessing] = useState(false)
  const [data, setData] = useState(initialValue)

  const targetDatabase = useTargetDatabase()

  const create = async () => {
    try {
      await targetDatabase.create({
        amount: data.amount,
        name: data.name
      })

      Alert.alert("Nova Meta", "Meta criada com sucesso!", [
        { text: 'Ok', onPress: () => router.back()}
      ])
      setData(initialValue)
    } catch {
        Alert.alert("Error", "Não foi possível criar a meta.")
    } finally {
      setIsProcessing(false)
    }
  }

  const handleSave = () => {
    if(!data.name.trim() || data.amount <= 0) {
      return Alert.alert("Atenção", "Preencha nome e valor.")
    }

    setIsProcessing(true)

    if (params.id) {
      return
    }

    create()
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader title="Meta" subtitle="Economize para alcançar sua meta financeira."/>
      <View style={{marginTop: 32, gap: 24}}>
        <Input 
          value={data.name} 
          label="Nome da meta" 
          placeholder="Ex: Viagem para praia, Apple Watch"
          onChangeText={(value) => {
              setData((prevData) => ({
              ...prevData,
              name: value
            }))
          }}
        />
        <CurrencyInput 
          label="Valor alvo (R$)" 
          value={data.amount} 
          onChangeValue={(value) => {
            setData((prevData) => ({
              ...prevData,
              amount: value
            }))
          }}
        />
        <Button
          title="Salvar"
          isProcessing={isProcessing}
          onPress={handleSave}
        />
      </View>

    </View>
  )
}
