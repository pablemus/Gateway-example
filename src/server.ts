import Fastify from 'fastify'
import type {ZodTypeProvider} from "fastify-type-provider-zod";
import {serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import {registerPlugins} from "./registerPlugins.ts";
import {initGateway} from "./initGateway.js";

const fastify = Fastify({
    logger: true
}).withTypeProvider<ZodTypeProvider>();
fastify.setSerializerCompiler(serializerCompiler);
fastify.setValidatorCompiler(validatorCompiler);

await registerPlugins(fastify);
await initGateway(fastify);

fastify.setNotFoundHandler((req, rep) =>{
   rep.code(404).send({Error: "La ruta que estas buscando no existe"});
});

fastify.listen({port: 3005, host:'0.0.0.0'}, (err)=>{
    if(err){
        fastify.log.error(err);
        process.exit(1);
    }
});