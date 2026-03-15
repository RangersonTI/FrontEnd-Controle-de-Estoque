import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { appConfig } from "../shared/configs/app"
import { routesConfig } from "../shared/configs/routes"
import { Movimentacao } from "../Features/Movimentacao/page";
import { Inicio } from "../Features/Inicio";
import { Marca } from "../Features/Marca/page";
import { Produto } from "../Features/Produto/page";
import { UnidadeDeMedida } from "../Features/UnidadeDeMedida/page";
import { TiposDeproduto } from "../Features/TiposDeproduto/page";

export const RotasApp = () => {
    return(
        <BrowserRouter basename={appConfig.BASENAME}>
            <Routes>
                <Route
                    path={routesConfig.INICIO}
                    element={<Inicio />}
                />

                <Route
                    path={routesConfig.MARCAS}
                    element={<Marca />}
                />

                <Route
                    path={routesConfig.PRODUTOS}
                    element={<Produto />}
                />

                <Route
                    path={routesConfig.TIPOS_DE_PRODUTO}
                    element={<TiposDeproduto />}
                />

                <Route
                    path={routesConfig.UNIDADES_DE_MEDIDA}
                    element={<UnidadeDeMedida />}
                />

                <Route
                    path={routesConfig.MOVIMENTACOES}
                    element={<Movimentacao />}
                />

                <Route
                    path="*"
                    element={<Navigate to={routesConfig.INICIO} replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}