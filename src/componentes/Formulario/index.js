import { Title } from "@mantine/core";
import { useForm } from '@mantine/form';
import { TextInput, Button, Box} from '@mantine/core';
import GravarBanco from "./back-end";
import './formulario.css'

export default function Formulario(){

    const form = useForm({
        initialValues: { nome: '', email: '', celular: '', descricao:'' },
    
        validate: {
          nome: (value) => (value.length < 2 ? 'Nome precisa conter mais de 2 letras' : null),
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
          celular: (value) => (value.length < 10 ? 'Celular inválido' : null),
        },
        transformValues: (values) => ({
            Nome: `${values.nome}`,
            Email: `${values.email}`,
            Celular: `${values.celular}`,
            Descricao: `${values.descricao}` || 0,
          }),
      });
    
      return (
        <>
        <div className="titulo">
            <Title id="contato">Contato</Title>
        </div>
        <Box maw={400} mx="auto" className="box">
          <form onSubmit={form.onSubmit((values) => GravarBanco(values))}>
            <TextInput label="Nome" placeholder="Nome" {...form.getInputProps('nome')} />
            <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
            <TextInput 
            type="number"
            label="Celular"
            placeholder="Celular"
            {...form.getInputProps('celular')}
            />
            <TextInput
            label="Descrição"
            placeholder="Digite sua solicitação"
            {...form.getInputProps('descricao')}
            />
            <Button type="submit" mt="sm"
            variant="outline"
            >
              Enviar
            </Button>
          </form>
        </Box>
        </>
    )
}