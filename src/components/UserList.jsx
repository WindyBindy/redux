function UserList({ users, onDelete }) {
	return (
		<>
			{users.length > 0 ? (
				<ul>
					{users.map(({ id, name, age, email, isActive }) => {
						return (
							<li key={id}>
								<h2>Ім'я: {name}</h2>

								<p>Вік: {age}</p>

								<p>Пошта: {email}</p>

								<p>Статус: {isActive ? 'online' : 'offline'}</p>

								<button onClick={() => onDelete(id)} type='button'>
									Видалити
								</button>
							</li>
						)
					})}
				</ul>
			) : (
				<p>not found</p>
			)}
		</>
	)
}

export default UserList
