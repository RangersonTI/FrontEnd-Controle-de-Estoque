import { Api } from "../../Api";
import { ApiException } from "../../ApiException";

interface ICadastrarMovimentacaoProps {
  CodProd: number;
  TipoMovimentacao: number;
  CodMovimentacaoEntrada: number | null;
  QtdAMovimentar: number;
  DataArmazenagem: string | null;
  DataSaida: string | null;
  Observacao: string;
}

export const Cadastrar = async(body: ICadastrarMovimentacaoProps) => {
    try {
        await Api.post("/movimentacoes", body)
    } 
    catch (error) {
        throw new ApiException(error, "Não foi possível realizar a movimentação do estoque!");    
    }
}