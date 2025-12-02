import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";
import { TransactionType } from "@/components/TransactionType";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

export default function Transaction() {
  const {id} = useLocalSearchParams<{id: string}>()
  const [type, setType] = useState(TransactionTypes.Input)

  return (
    <View style={{ flex:1, padding: 24, gap: 32}}>
      <PageHeader 
        title="Nova transação"
        subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guarda e evitar retirar."
      />

      <TransactionType onChange={setType} selected={type} />

      <View style={{ gap: 24 }}>
        <CurrencyInput
          label="Valor (R$)"
          value={0}
        />

        <Input
          label="Motivo (opcional)"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
        />

        <Button
          title="Salvar"
        />
      </View>
    </View>
  )
}