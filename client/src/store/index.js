import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from '../store/actions';

const initialState = {
    response: null,
    loading: false,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
