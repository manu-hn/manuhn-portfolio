"use client";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeActiveSection } from '@/store/slice/themeSlice';
import type { SectionName } from '@/types/types';
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

type Props = {
    sectionName: SectionName;
    threshold: number
}

const useIsSectionInView = ({ sectionName, threshold = 0.5 }: Props) => {

    const { ref, inView } = useInView({
        threshold,
    });
    const dispatch = useAppDispatch();
    const { lastTimeClicked } = useAppSelector((store) => store?.theme);


    useEffect(() => {
        if (inView && Date.now() - lastTimeClicked > 1000) {
            dispatch(changeActiveSection(sectionName));
        }
    }, [inView, lastTimeClicked, dispatch, sectionName])


    return {
        ref
    }
}

export default useIsSectionInView;