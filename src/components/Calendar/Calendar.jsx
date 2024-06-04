import { useState } from 'react';
import classes from './calendar.module.css';
import moment from 'moment';

export const Calendar = (props) => {

	const [selectedDay, setSelectedDay] = useState({
		week: null,
		day: null
	});

	const handleDateClick = (index, indexWeek) => {
		setSelectedDay({
			week: indexWeek,
			day: index
		});;
	}

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

	moment.updateLocale('en', { week: { dow: 1 } });
	const currentDate = props.date;
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth() + 1;
	const currentDay = currentDate.getDate();
	const dayWeek = dayNames[currentDate.getDay()];


	const monthAllData = [];
	const monthData = [];

	function parseData() {
		const startDay = moment(currentYear + '-' + currentMonth + '-' + currentDay).startOf('month').startOf('week');
		const endDay = moment(currentYear + '-' + currentMonth + '-' + currentDay).endOf('month').endOf('week');
		let dayCounter = startDay
		while (!dayCounter.isAfter(endDay)) {
			if (+moment(dayCounter).format('DD') === currentDay &&
				+moment(dayCounter).format('MM') === currentMonth) {
				monthAllData.push({ day: dayCounter.format('DD'), moment: dayCounter, class: 'ui-datepicker-today' });
			} else if (+moment(dayCounter).format('MM') !== currentMonth) {
				monthAllData.push({ day: dayCounter.format('DD'), moment: dayCounter, class: 'ui-datepicker-other-month' });
			} else {
				monthAllData.push({ day: dayCounter.format('DD'), moment: dayCounter, class: 'ui-datepicker-current-month' });
			}
			dayCounter.add(1, 'd');
		}

		let sliceStart = 0;
		let sliceEnd = 7;
		for (let i = 0; i < monthAllData.length / 7; i++) {
			monthData.push(monthAllData.slice(sliceStart, sliceEnd));
			sliceStart += 7;
			sliceEnd += 7;
		}
	}

	parseData();

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
							<th key={index} scope="col" title={name} className={classes['ui-datepicker-week-names']}>{dayNamesAbbr[index]}</th>
						)}
					</tr>
				</thead>
				<tbody>
					{monthData.map((week, indexWeek) =>
						<tr key={indexWeek}>
							{week.map((dayWeek, index) =>
								<td
									key={index}
									className={
										`${classes[dayWeek.class]} ${selectedDay.day === index &&
											selectedDay.week === indexWeek &&
											dayWeek.class.includes('ui-datepicker-current-month') ?
											classes['ui-datepicker--selected'] : ''}`}
									onClick={() => handleDateClick(index, indexWeek)}>
									{+dayWeek.day}
								</td>
							)}
						</tr>
					)}
				</tbody>
			</table>
		</div>
	)
}