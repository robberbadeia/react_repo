import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
  params: {
		key: 'ba7f2cc234df40cfbbc5e8ba478d0826',
	},
})