import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TopicService from '../../../../services/API/topic.service';
import { RES_DATA } from '../../../../Constant/global';
import { SET_WORD } from '../../../../store/feature/word';

function FormStep3() {
	const dispatch = useDispatch();
	const [topics, setTopics] = useState([]);

	const getAllTopics = async () => {
		let topicLocalStorage = [];
		const resTopic = await TopicService.getAllTopic();

		const resMetadata = resTopic[RES_DATA]?.metadata;
		topicLocalStorage = resMetadata.map((topic) => {
			topic = {
				_id: topic._id,
				name: topic.name,
				numberCount: 0,
				listElement: [],
			};

			return topic;
		});

		let topicActive = topicLocalStorage.map((topic) => {
			topic['isActive'] = false;

			return topic;
		});
		localStorage.setItem('topics', JSON.stringify(topicLocalStorage));
		setTopics(topicActive);
	};

	useEffect(() => {
		const topicLocalStorage = JSON.parse(
			localStorage.getItem('topics')
		);

		console.log({ topicLocalStorage });
		if (topicLocalStorage) {
			let topicActive = topicLocalStorage.map((topic) => {
				topic['isActive'] = false;

				return topic;
			});
			setTopics(topicActive);
		} else {
			getAllTopics();
		}
	}, []);

	const chooseTopic = (topicId) => {
		let topicCopy = topics;

		topicCopy = topicCopy.map((topic) => {
			if (topic._id === topicId._id) {
				topic.isActive = !topic.isActive;
			} else {
				topic.isActive = false;
			}

			return topic;
		});
		setTopics(topicCopy);
		dispatch(SET_WORD({ topicId: topicId._id }));
	};
	return (
		<div className="w-ful flex justify-center">
			<div className="flex flex-col gap-10">
				<div className="text-center text-orange-400 font-medium">
					Từ của bạn thuộc chủ để nào vậy nhỉ
				</div>

				{topics.length > 0 &&
					topics.map((topic, idx) => {
						return (
							<div
								key={idx}
								className={`px-2 pt-1 text-center pt-1 text-center border text-sm rounded shadow ${
									topic.isActive === true ? 'bg-green-200' : ''
								}`}
								onClick={() => chooseTopic(topic)}
							>
								{topic.name}
							</div>
						);
					})}
				<div className="grid grid-cols-4  gap-3"></div>
			</div>
		</div>
	);
}

export default FormStep3;
