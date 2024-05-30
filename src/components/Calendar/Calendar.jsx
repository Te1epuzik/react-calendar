import classes from './calendar.module.css';

export const Calendar = (props) => {
	const monthNames = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сеньябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь'
	];
	const monthDeclensionNames = [
		'Января',
		'Февраля',
		'Марта',
		'Апреля',
		'Мая',
		'Июня',
		'Июля',
		'Августа',
		'Сеньября',
		'Октября',
		'Ноября',
		'Декабря'
	];
	const dayNames = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	];
	const dayNamesAbbr = [
		'Вс',
		'Пн',
		'Вт',
		'Ср',
		'Чт',
		'Пт',
		'Сб'
	];

	const currentDate = props.date;
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();
	const dayWeek = dayNames[currentDate.getDay()];

	const monthMayData = [
		[
			{ day: 29, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 30, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 1, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 2, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 3, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 4, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 5, month: 'current', class: 'ui-datepicker-current-month' }
		],
		[
			{ day: 6, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 7, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 8, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 9, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 10, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 11, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 12, month: 'current', class: 'ui-datepicker-current-month' }
		],
		[
			{ day: 13, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 14, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 15, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 16, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 17, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 18, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 19, month: 'current', class: 'ui-datepicker-current-month' }
		],
		[
			{ day: 20, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 21, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 22, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 23, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 24, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 25, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 26, month: 'current', class: 'ui-datepicker-current-month' }
		],
		[
			{ day: 27, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 28, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 29, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 30, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 31, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 1, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 2, month: 'another', class: 'ui-datepicker-other-month' }
		],
	];
	const monthJuneData = [
		[
			{ day: 27, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 28, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 29, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 30, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 31, month: 'another', class: 'ui-datepicker-other-month' },
			{ day: 1, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 2, month: 'current', class: 'ui-datepicker-current-month' },
		],
		[
			{ day: 3, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 4, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 5, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 6, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 7, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 8, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 9, month: 'current', class: 'ui-datepicker-current-month' },
		],
		[
			{ day: 10, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 11, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 12, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 13, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 14, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 15, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 16, month: 'current', class: 'ui-datepicker-current-month' },
		],
		[
			{ day: 17, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 18, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 19, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 20, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 21, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 22, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 23, month: 'current', class: 'ui-datepicker-current-month' },
		],
		[
			{ day: 24, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 25, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 26, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 27, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 28, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 29, month: 'current', class: 'ui-datepicker-current-month' },
			{ day: 30, month: 'current', class: 'ui-datepicker-current-month' },
		],
	];
	const monthData = [];

	switch (currentMonth) {
		case 4:
			monthMayData.forEach((week) => {
				monthData.push(week);
			});
			break;
		case 5:
			monthJuneData.forEach((week) => {
				monthData.push(week);
			});
			break;
	}
	console.log(currentDay)

	for (let i = 0; i < monthData.length; i++) {
		monthData[i].forEach(day => {
			if (day.day === currentDay && day.class === 'ui-datepicker-current-month') {
				day.class = 'ui-datepicker-today';
			}
		});
	}

	return (
		<div className={classes["ui-datepicker"]}>
			<div className={classes["ui-datepicker-material-header"]}>
				<div className={classes["ui-datepicker-material-day"]}>{dayWeek}</div>
				<div className={classes["ui-datepicker-material-date"]}>
					<div className={classes["ui-datepicker-material-day-num"]}>{currentDay}</div>
					<div className={classes["ui-datepicker-material-month"]}>{monthDeclensionNames[currentMonth]}</div>
					<div className={classes["ui-datepicker-material-year"]}>{currentYear}</div>
				</div>
			</div>
			<div className={classes["ui-datepicker-header"]}>
				<div className={classes["ui-datepicker-title"]}>
					<span className={classes["ui-datepicker-month"]}>{monthNames[currentMonth]}</span>&nbsp;
					<span className={classes["ui-datepicker-year"]}>{currentYear}</span>
				</div>
			</div>
			<table className={classes["ui-datepicker-calendar"]}>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col className={classes["ui-datepicker-week-end"]} />
					<col className={classes["ui-datepicker-week-end"]} />
				</colgroup>
				<thead>
					<tr>
						{dayNames.map((name, index) =>
							<th scope="col" title={name} className={classes['ui-datepicker-week-names']}>{dayNamesAbbr[index]}</th>
						)}
					</tr>
				</thead>
				<tbody>
					{monthData.map((week, index) =>
						<tr>
							{monthData[index].map((dayWeek) =>
								<td className={classes[dayWeek.class]}>{dayWeek.day}</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}
