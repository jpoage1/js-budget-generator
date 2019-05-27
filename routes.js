
import stats from './modules/stats';
export const routes = [
	{
		path: '/stats',
		method: {
			post: async (req, res) => {
                const { config, staff } = req.body
                if ( !Array.isArray(config) || !Array.isArray(staff) ) {
					res.send("Error: input must be of type 'Array'.");
					return;
				}
                res.json(stats(config, staff));
			},
		},
	},
];