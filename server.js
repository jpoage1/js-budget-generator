import express from 'express';
import compression from 'compression';

const app = express();
app.use(compression())
app.use(express.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
import { routes } from './routes';
routes.forEach( (route, i) => {
	//console.log(route[0])
    const { method, path} = route;
    const methods = ['get','post','put','delete'];
    if ( method ) {
        Object.keys(method).forEach( (k) => {
            let module;
            const methodType = typeof method[k];
            if ( methods.indexOf(k) !== -1 && methodType === 'function' ) {
                module = method[k];
            } else if ( method[k].localPath ) {
                module = require(localPath);
            } else {
                module = (req, res) => {
                    console.log("Warning: route.js config error. Please verify that your 'route.js' routes are propely defined and assigned.");
                    console.log(`Error at route ${i} on module ${k}, methodType = ${methodType}`);
                    console.log(method[k])
                    res.send([]);
                }
            }
            app[k](path, module);
        })
    } else {
        module = (req, res) => {
            console.log("Warning: route.js config error. Please verify that your 'route.js' routes are propely defined and assigned.");
            console.log(`Error at route ${i}, no method defined`);
            res.send([]);
        }
        methods.forEach( method => app[method](path, module))
    }
/*
	app.post(route.path, (req, res) => {
		const { body, params, query } = req;
		const { table, insert } = method.post;
		const sqlColumns = insert.map( (column, i) => {
			return `"${column}", `
		}).join(' ').slice(0,-2);;
		const sqlValues = insert.map( (column, i) => {
			if ( isNaN(body[column]) )	{
				return `'${body[column]}', `
			}
			return `${body[column]}, `
		}).join(' ').slice(0,-2);
		const sql = `INSERT INTO ${table}\n(${sqlColumns})\nVALUES\n(${sqlValues}) `;
		console.log(sql)
		pool.query(sql)
		.then( result => res.send(JSON.stringify(result)) )
		.catch( e => res.status(403).send(e.stack) );
	});
	app.put(route.path, (req, res) => {

	});
	app.delete(route.path, (req, res) => {
		const { body, params, query } = req;
		const { table, id } = method.delete;
		const sqlColumns = id.map( (column, i) => {
			return `"${column}", `
		}).join(' ').slice(0,-2);;
		const sqlValues = id.map( (column, i) => {
			if ( isNaN(body[column]) )	{
				return `'${body[column]}', `
			}
			return `${body[column]}, `
		}).join(' ').slice(0,-2);
		const sql = `DELETE FROM ${table}\n(${sqlColumns})\nVALUES\n(${sqlValues}) `;
		console.log(sql)
		pool.query(sql)
		.then( result => res.send(JSON.stringify(result)) )
		.catch( e => res.status(403).send(e.stack) );

    });
    */
});
// Start listening
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));