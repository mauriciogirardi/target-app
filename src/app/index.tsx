import { Button } from "@/components/Button"
import { HomeHeader } from "@/components/HomeHeader"
import { List } from "@/components/List"
import { Target } from "@/components/Target"
import { router } from "expo-router"
import { StatusBar, View } from "react-native"

const summary = {
  total: 'R$ 2.400,98',
  input: { label: 'Entradas', value: 'R$: 2.000,00' },
  output: { label: 'Saídas', value: '-R$: 2.000,00' },
}

const targets = [
  {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '45%',
    target: 'R$ 500,00',
    id: '1'
  },
   {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '45%',
    target: 'R$ 500,00',
    id: '2'
  },
   {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '45%',
    target: 'R$ 500,00',
    id: '3'
  },
  {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '45%',
    target: 'R$ 500,00',
    id: '4'
  },
   {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '45%',
    target: 'R$ 500,00',
    id: '5'
  },
   {
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '45%',
    target: 'R$ 500,00',
    id: '6'
  }
]

export default function Index() {
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
