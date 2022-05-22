import { useDispatch } from 'react-redux';
import { Dispatch } from '@app/store';

const useTypedDispatch = () => useDispatch<Dispatch>();

export default useTypedDispatch;
