import axios from 'axios'

const api = axios.create({
	baseURL: 'https://api.openweathermap.org/data/2.5',
})

api.interceptors.request.use((config) => {
	config.url =
		config.url + '&appid=' + '9378504709b9322592ff26c26a24047f&&units=metric'
	return config
})

export default api
