'use client'
import React, { ChangeEvent, useCallback, useRef, useState } from 'react'
import { AddMain, CloseIcon, Edit, Frame, NewModalDiv, Profile, SvgMain, Thirdblock, Title, Top } from './style'
import SVGIcon from '@/app/assets/SVGIcon';
import Button from '@/app/components/button/button';
import InputComponent from '@/app/components/input/input';
import Avatar from '@/app/components/avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '@/actions/messageActions';
import { Input, Label, Labels } from '@/app/components/input/styles';
import { nanoid } from '@reduxjs/toolkit';
import { addcompanyDetails } from '@/services/companyServices';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';

function AddNewCompanyModal(props: any) {
    const { onClose } = props;
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [profileImage, setProfileImage] = useState<{
        profile?: string;
        file?: File;
    }>({});
    const [users, setUsers] = useState([{ id: nanoid(), email: "" }]);
    const [name, setName] = useState('');
    const userSelector = useSelector((state: RootReducerInterface) => state.user);
    const { userDetails } = userSelector || {};

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                const item = {
                    profile: fileReader.result as string,
                    file: file,
                };
                setProfileImage(item);
                // handleInputChange('profileImage', item?.profile);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFileRead = async (event: any) => {
        try {
            const file = event.target.files[0];
            let fileData = file?.name?.split('.');
            if (file.size > 500000) {
                dispatch(setErrorMessage('Please upload less than 500kb photo size.'));
                return false;
            }
            if (fileData[1] === 'jpg' || fileData[1] === 'jpeg' || fileData[1] === 'png') {
                await convertBase64(file);
            } else {
                dispatch(setErrorMessage('Please upload a valid type photo.'));
                return false;
            }
        } catch (e) {
            console.log('error', e);
        }
    };

    const handleUploadClick = () => {
        inputRef.current?.click();
    };

    const onClickPlus = useCallback(() => {
        setUsers([...users, { id: nanoid(), email: "" }])
    }, [users])

    const onClickRemove = useCallback((index: number, users: { id: string; email: string }[]) => {
        let usersClone = [...(users || [])];
        usersClone.splice(index, 1)
        setUsers(usersClone);
    }, [])

    const onChangeEmail = useCallback((value: string, users: any, index: number) => {
        let usersClone = [...(users || [])];
        usersClone[index].email = value
        setUsers(usersClone);
    }, [])

    const onCreateCompany = useCallback(async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const payload = {
            name,
            users,
            userId: userDetails?.id
        }
        const result = await dispatch(addcompanyDetails(payload))
        if (result) {
            setName('')
            setUsers([{ id: nanoid(), email: '' }])
            onClose();
        }
    }, [dispatch, name, onClose, userDetails?.id, users])

    return (
        <NewModalDiv>
            <CloseIcon
                onClick={() => {
                    if (onClose) onClose();
                }}>
                <SVGIcon name='close-icon' width='24' height='24' viewBox='0 0 24 24' className='close' />
            </CloseIcon>
            <Top>
                <Profile>
                    {/* <Logo>
                        <img src={sliderData?.logo?.url} alt='logo' className='img' />
                    </Logo> */}
                    <Frame>
                        <Title>Create new company</Title>
                        {/* <Description>{sliderData?.tag}</Description> */}
                    </Frame>
                </Profile>
            </Top>
            <Thirdblock onSubmit={onCreateCompany}>
                <Profile>
                    <Avatar
                        imgSrc={''}
                        name={'Testing'}
                        size={100}
                    />
                    <Edit onClick={handleUploadClick}>
                        <input type='file' onChange={handleFileRead} ref={inputRef} style={{ display: 'none' }} />
                        <SVGIcon name='edit-icon' width='52' height='52' viewBox='0 0 52 52' className='svgicon' />
                    </Edit>
                </Profile>
                <InputComponent
                    title='Name'
                    placeholder={'Enter your name'}
                    className='input'
                    type='text'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <div className={`input-container-multiple active`}>
                    <Labels>
                        <Label>
                            Users
                        </Label>
                    </Labels>
                    {users?.map((inp, index) => <AddMain>
                        <Input
                            placeholder={'Enter your email address'}
                            // width={width}
                            // hasError={hasError}
                            // className={className}
                            value={inp?.email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeEmail(e.target.value, users, index)}
                        // type={isShow ? 'text' : type}
                        // disabled={disabled}
                        // {...props}
                        />
                        {index === users?.length - 1 ? <SvgMain onClick={onClickPlus}>
                            <SVGIcon name='plus-icon' width='25' height='25' viewBox='0 0 50 50' className='svgicon' />
                        </SvgMain> : <SvgMain onClick={() => onClickRemove(index, users)}>
                            <SVGIcon name='cross-remove-icon' width='25' height='25' viewBox='0 0 50 50' className='svgicon' />
                        </SvgMain>}
                    </AddMain>)}

                </div>
                <Button
                    title={'Create'}
                    type='submit'
                    secondary={true}
                    width={true}
                    secondaryButtonLoadingColor={true}
                    className='button'
                // isLoading={loading}
                />
            </Thirdblock>
        </NewModalDiv>
    )
}

export default AddNewCompanyModal
