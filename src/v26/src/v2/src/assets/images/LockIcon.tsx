import * as React from 'react';

interface Props {
    className?: string;
}

export const LockIcon: React.FC<Props> = (props: Props) => (
    <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={props.className}>
        <path d="M1.26236 17.0796C1.73976 16.6023 2.31908 16.3638 3.0012 16.3638H3.81891V11.4544C3.81891 8.3181 4.9436 5.62516 7.1937 3.37515C9.44362 1.12505 12.1363 0 15.2731 0C18.4097 0 21.1029 1.12505 23.3527 3.37506C25.6028 5.62516 26.7275 8.31801 26.7275 11.4544V16.3638H27.5455C28.2271 16.3638 28.8068 16.6023 29.2841 17.0796C29.7614 17.5565 30 18.1362 30 18.8184V33.5455C30 34.2271 29.7613 34.807 29.2841 35.2844C28.8068 35.7613 28.2271 36 27.5455 36H3.00057C2.31845 36 1.73923 35.7615 1.26173 35.2844C0.784863 34.807 0.545847 34.2271 0.545847 33.5455V18.8182C0.545488 18.1365 0.784861 17.5569 1.26236 17.0796ZM8.72774 16.3638H21.8184V11.4544C21.8184 9.64769 21.1791 8.10497 19.9007 6.82678C18.6221 5.54842 17.0797 4.90937 15.2728 4.90937C13.4657 4.90937 11.9236 5.54833 10.645 6.82678C9.36697 8.10488 8.72774 9.64769 8.72774 11.4544V16.3638Z" fill="#009991"/>
    </svg>
);