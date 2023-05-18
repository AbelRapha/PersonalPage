import { notifications } from '@mantine/notifications'

export default async function GravarBanco(data){
    try{
      const response = await fetch('https://sheetdb.io/api/v1/iiye9bvntzpql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok){
        throw new Error()
      }
      else{
        notifications.show({
            title: 'OK',
            message: 'Enviado',
            color: "green",
            
          })
      }
    }
    catch{
        notifications.show({
            title: 'Erro no envio',
            message: 'Desculpe aconteceu algo errado 🤥',
            color: "red"
          })
    }
}
