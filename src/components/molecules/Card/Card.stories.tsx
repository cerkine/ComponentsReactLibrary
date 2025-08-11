import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card, type DataCardProps } from './Card';

const meta = {
  component: Card,
  tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const data: DataCardProps[] =
  [
    {
      key: 'atk',
      value: '151'

    },
    {
      key: 'def',
      value: '151'

    },
    {
      key: 'vel',
      value: '151'

    }
  ]


export const Default: Story = {
  args: {
    title: "title",
    description:"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
    data: data,
    image: 'https://imgs.search.brave.com/Lun-zHZPHSE7hYlJ1_bX09fI98CTz0Cn4ZZFaW4XJ_U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE5MTc5NjQ5L3Iv/aWwvNTIxODFlLzQ1/NzI1MDAzNzMvaWxf/NjAweDYwMC40NTcy/NTAwMzczXzZzZ24u/anBn',
    display: "column",
    radius: "medium",
    border: "thin",
    borderColor: "gray",
    backgroundColor: "white",
    shadow: "medium",
    padding: "medium",
    width: "medium",
  }
};