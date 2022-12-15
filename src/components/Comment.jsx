import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment() {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src='https://github.com/SofiaMartinslv.png' />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Sofia Martins</strong>
							<time
								title='15 de Dezembro às 11:30'
								dateTime='2022-12-15 11:30:12'
							>
								Cerca de 1h atrás
							</time>
						</div>

						<button title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Eduardo, parabéns!! 👏👏</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
