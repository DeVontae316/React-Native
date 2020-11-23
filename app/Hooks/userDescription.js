import { useSelector } from 'react-redux';

export function getDescription() {
    const { description } = useSelector(state => state.practiceReducer)

    return description;
}

export function getUpdatedDescription() {
    const { update } = useSelector(state => state.practiceReducer);

    return update;
}
export function getDeleteMessage() {
    const { messages } = useSelector(state => state.practiceReducer);

    return messages;
}