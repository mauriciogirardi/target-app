import { useSQLiteContext } from "expo-sqlite"

export type TargetCreate = {
  name: string
  amount: number
}

export function useTargetDatabase(){
  const db = useSQLiteContext()

  async function create(data: TargetCreate) {
    const statement = await db.prepareAsync(
      "INSERT INTO targets (name, amount) VALUES ($name, $amount)"
    )

    statement.executeAsync({
      $name: data.name,
      $amount: data.amount
    })
  }

  return {
    create
  }
}