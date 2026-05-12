import dayjs from "dayjs"

const dataAtual = () => dayjs().format("YYYY-MM-DD")

export const Obter = {
    dataAtual
}