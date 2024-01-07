import { Router } from "express";
import { usuarioRoutes } from "./usuario.routes";
import { enderecoRoutes } from "./endereco.routes";
import { adminRoutes } from "./admin.routes";
import { recepcaoRoutes } from "./recepcao.routes";
import { enderecoFiscalRoutes } from "./enderecofiscal.routes";
import { encomendaRoutes } from "./encomenda.routes";

// import clienteRouter from "../controllers/ClienteController";
// import adminRouter from "../controllers/AdminController";
// import representanteRouter from "../controllers/RepresentanteController";
// import enderecoFiscalRouter from "../controllers/EnderecoFiscalController";
// import recebimentoEncomendaRouter from "../controllers/RecebimentoEncomendaController";
// import pessoaJuridicaRouter from "../controllers/PessoaJuridicaController";
// import encomendaRouter from "../controllers/EncomendaController";
// import enderecoRouter from "../controllers/EnderecoController";
// import pessoaFisicaRouter from "../controllers/PessoaFisicaController";
// import recepcaoRouter from "../controllers/RecepcaoController";
// import retiradaEncomendaRouter from "../controllers/RetiradaEncomendaController";
// import usuarioRouter from "../controllers/UsuarioController";

const routes  = Router();

// Configuração das rotas
// routes.use('/cliente', clienteRouter);
// routes.use('/admin', adminRouter);
// routes.use('/representante', representanteRouter);
// routes.use('/enderecoFiscal', enderecoFiscalRouter);
// routes.use('/recebimentoEncomenda', recebimentoEncomendaRouter);
// routes.use('/pessoaJuridica', pessoaJuridicaRouter);
// routes.use('/encomenda', encomendaRouter);
// routes.use('/endereco', enderecoRouter);
// routes.use('/pessoaFisica', pessoaFisicaRouter);
// routes.use('/recepcao', recepcaoRouter);
// routes.use('/retiradaEncomenda', retiradaEncomendaRouter);
// routes.use('/usuario', usuarioRouter);

routes.use("/usuario", usuarioRoutes);
routes.use("/endereco", enderecoRoutes);
routes.use("/admin", adminRoutes);
routes.use("/recepcao", recepcaoRoutes);
routes.use("/enderecofiscal", enderecoFiscalRoutes);
routes.use("/encomenda", encomendaRoutes);


export {routes};