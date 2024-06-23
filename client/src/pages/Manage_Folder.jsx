import React, { useState, useRef, useContext, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { FILE_API_URL } from '../utils/constants';
import { SpaceShareContext } from '../context/Space_Share_Context';
import { Auth_Context } from '../context/Auth_Context';
import download from 'downloadjs';

const Manage_Folder = (props) => {
  const { currentAccount, isDataOwner, getStorageContractByOwner } = useContext(SpaceShareContext);
  const { user } = useContext(Auth_Context);
  const [receiver, setReciever] = useState(null); //state for storing the reciever
  const [file, setFile] = useState(null); // state for storing file
  const [getAllFiles, setAllFiles] = useState([]);
  const [state, setState] = useState({
    title: '',
    description: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  async function fetchContractDetailsByOwner() {
    if (currentAccount) {
      // console.log(currentAccount);
      const getContracts = await getStorageContractByOwner();
      if (isDataOwner === "Yes") {
        setReciever(getContracts[0].SO);
        console.log(getContracts[0].SO);
      }
      else {
        setReciever(getContracts[0].DO);
        console.log(getContracts[0].DO);
      }
    }
  }

  async function getAllFilesByOwner() {
    try {
      const data = await axios.get(`${FILE_API_URL}/getAllFiles/${user?.data?.metamaskId}`);
      console.log(data?.data);
      setAllFiles(data?.data);
      console.log(getAllFiles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchContractDetailsByOwner();
    // getAllFilesByOwner();
  }, [currentAccount]);


  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const downloadFile = async (_id, path, mimetype) => {
    try {
      const result = await axios.get(`${FILE_API_URL}/download/${_id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      console.log(error);
    }
  }

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = '2px dashed #e9ebeb';
  };

  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { title, description } = state;
      if (title.trim() !== '' && description.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('description', description);
          formData.append('receiver', receiver);

          setErrorMsg('');
          await axios.post(`${FILE_API_URL}/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          // props.history.push('/list');
          alert('File sent successfully!');
        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };
  const handleOnRequest = async (event) => {
    event.preventDefault();

    try {
      const { title, description } = state;
      if (title.trim() !== '' && description.trim() !== '') {
          const formData = new FormData();
          formData.append('title', title);
          formData.append('description', description);
          formData.append('receiver', receiver);

          setErrorMsg('');
          await axios.post(`${FILE_API_URL}/requestFile`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          // props.history.push('/list');
          alert('Request sent successfully!');
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (!user || !currentAccount || !receiver) {
    return <><br /> <h1 className='text-white text-center text-3xl'>
      You don't have any storage contract either buy storage or wait for the user to rent your storage.</h1></>;
  }

  return (
    <>
      <div className='flex justify-center items-center m-4'>
        <div className="ms-auto-xs text-center">
          <form className="blue-glassmorphism shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                File Name
              </label>
              <input className="shadow appearance-none border rounded py-2 px-3 
                                        leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="title" type="text" placeholder="Enter File Name" value={state.title || ''}
                onChange={handleInputChange} />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <input className="shadow appearance-none border rounded py-2 px-3 
                                        leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="description" type="text" placeholder="Description" value={state.description || ''}
                onChange={handleInputChange} />
            </div>
            <Dropzone
              onDrop={onDrop}
              onDragEnter={() => updateBorder('over')}
              onDragLeave={() => updateBorder('leave')}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                  <input {...getInputProps()} />
                  <p>Drag and drop a file OR click here to select a file</p>
                  {file && (
                    <div>
                      <strong>Selected file:</strong> {file.name}
                    </div>
                  )}
                </div>
              )}
            </Dropzone>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                        py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Send Files
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <button className='getAllFiles flex items-center bg-red-500 hover:bg-red-700 text-white 
        font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="button" onClick={getAllFilesByOwner}>Get All Files</button>
      </div>
      <table className="min-w-full table-auto blue-glassmorphism border text-white">
        <thead className='border-b'>
          <tr>
            <th className="w-1/4 lg:w-1/5" p-2>File Name</th>
            <th className="w-1/4 lg:w-1/5 p-2">Description</th>
            <th className="w-1/4 lg:w-1/5 p-2">Download</th>
          </tr>
        </thead>
        <tbody className="relative">
          {getAllFiles &&
            getAllFiles.map((file) => (
              <tr key={file._id} className='text-center border-b'>
                <td className="w-1/4 lg:w-1/5 p-2">{file?.title}</td>
                <td className="w-1/4 lg:w-1/5 p-2">{file?.description}</td>
                <td className="w-1/4 lg:w-1/5 p-2">
                  <button className="bg-[#2952e3] py-2 px-5 mx-4 text-white rounded-full cursor-pointer hover:bg-[#2546bd]"
                    onClick={() => downloadFile(file?._id, file?.file_path, file?.mimetype)}>
                    Download
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isDataOwner == "Yes" &&
        <div className="ms-auto-xs text-center m-4">
          <form className="blue-glassmorphism shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnRequest}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="title">
                File Name
              </label>
              <input className="shadow appearance-none border rounded py-2 px-3 
                                    leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="title" type="text" placeholder="Enter File Name" value={state.title || ''}
                onChange={handleInputChange} />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <input className="shadow appearance-none border rounded py-2 px-3 
                                    leading-tight focus:outline-none focus:shadow-outline bg-white"
                name="description" type="text" placeholder="Description" value={state.description || ''}
                onChange={handleInputChange} />
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                    py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Request Files
              </button>
            </div>
          </form>
        </div>
      }
      <br/>
      {isDataOwner == "No" && <div className='flex items-center justify-center'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold 
                                    py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                                      Get All Request</button></div>}
    </>
  );
};

export default Manage_Folder;