import './Practice.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import { axiosReq } from '../../utils/axiosReq';
import parser from 'html-react-parser';
import { useEffect } from 'react';

const Practice = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['practice'],
    queryFn: () => axiosReq.get('/practice/').then(res => res.data)
  });
  useEffect(() => {
    refetch()
  }, [])

  return (
    <div className="practice-section">
      {
        isLoading ? 'Loading..' : error ? 'Something went wrong!' :
          <div className='about-wrapper'>
            {
              data.length === 0 ? <Link to='/practice/create' className="edit">CREATE</Link> :
                <Link to={`/practice/${data[0]?._id}`} className="edit">EDIT</Link>
            }
            <div className="about">
              <div className="title-body">
                <h4>{data[0]?.title}</h4>
                <div className="body">
                  {data[0] && parser(data[0]?.body)}
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default Practice