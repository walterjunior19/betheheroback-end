const { request } = require('express');
const express = require('express');

const app = express();
app.use(express.json())


/**GET: Buscar info. do back-end
 * POST: Criar uma Info. Back-end
 * PUT: Alterar Info. BAck-end
 * Delete: Deletar info. BAck end
 * 
 * Tipos de parametros
 * 
 * QUery: parametros nomeados na rota apos o "?" 'filtros, paginação'
 * Route params: Parametros ultilizados para identificar recursos
 * request body: corpo da requisição, ultilizado para criar ou alterar recursos 
*/

app.post('/users', (request, response)  => {  
    const body = request.body;

    console.log(body);

return response.json({
    Evento:'tomatecru',
    Aluno:'vacalokahghg'  

});
}); 

app.listen(3333);
