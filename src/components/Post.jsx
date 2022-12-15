import styles from './Post.module.css';

export function Post() {
	return (
		<>
			<article className={styles.post}>
				<header>
					<div className={styles.author}>
						<img
							className={styles.avatar}
							src='https:/github.com/eduardofreitas2.png'
						/>
						<div className={styles.authorInfo}>
							<strong>Eduardo Freitas</strong>
							<span>Software Developer</span>
						</div>
					</div>

					<time title='14 de Dezembro às 10:46' dateTime='2022-12-14 10:46:55'>
						Publicado há 1h
					</time>
				</header>

				<div className={styles.content}>
					<p>Fala galeraa 👋</p>

					<p>
						Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
						no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
						🚀
					</p>

					<p>
						👉 <a href=''>jane.design/doctorcare</a>
					</p>

					<p>
						<a href=''>#novoprojeto #nlw #rocketseat</a>
					</p>
				</div>
			</article>
		</>
	);
}
