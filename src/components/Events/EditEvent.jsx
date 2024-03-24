/* eslint-disable no-unused-vars */
import {
  Link,
  redirect,
  useNavigate,
  useNavigation,
  useParams,
  useSubmit,
} from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { state } = useNavigation();
  const params = useParams();

  //   getting data from cache
  const { data, isError, error } = useQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    staleTime: 10000,
  });

  //   const { mutate } = useMutation({
  //     mutationFn: updateEvent,
  //     onMutate: async (data) => {
  //       const newEvent = data.event;

  //       await queryClient.cancelQueries({ queryKey: ['events', params.id] });
  //       const previousEvent = queryClient.getQueryData({
  //         queryKey: ['events', params.id],
  //       });

  //       queryClient.setQueryData(['events', params.id], newEvent);

  //       return { previousEvent };
  //     },
  //     onError: (error, data, context) => {
  //       queryClient.setQueryData(['events', params.id], context.previousEvent);
  //     },
  //     onSettled: () => {
  //       queryClient.invalidateQueries({ queryKey: ['events', params.id] });
  //     },
  //   });

  function handleSubmit(formData) {
    // mutate({ id: params.id, event: formData });
    // navigate('../');
    submit(formData, {
      method: 'PUT',
    });
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title='Failed to load event'
          message={
            error.info?.message ||
            'Failed to load event, please check your inputs and try again later.'
          }
        />
        <div className='form-actions'>
          <Link to='../' className='button'>
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === 'submitting' ? (
          <p>Sending data...</p>
        ) : (
          <>
            <Link to='../' className='button-text'>
              Cancel
            </Link>
            <button type='submit' className='button'>
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function loader({ params }) {
  // this response will be store in cache, and in-the-above useQuery take from cache
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const updatedEventData = Object.fromEntries(formData);
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries({ queryKey: ['events'] });
  return redirect('../');
}
