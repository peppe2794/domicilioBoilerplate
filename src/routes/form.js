export default function Form() {
	return (
		<div class="">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<p>
					<input type="hidden" name="form-name" value="contact" />
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Nome
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="name" />
					</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Numero di telefono
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" inputmode="numeric" name="telephone" />
					</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Sito Web
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="site" />
					</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Note
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="email" />
					</label>
				</p>
				<p class="my-5">
					<button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Send</button>
				</p>
			</form>
		</div>
	);
}