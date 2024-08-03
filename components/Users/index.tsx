'use client';

import { Pagination } from '@nextui-org/react';
import Table from '../Common/Table';
import { useGetAllUsersQuery } from '@/api/users/users.hooks';

const columns = [
    {
        key: 'firstName',
        label: 'First Name',
    },
    {
        key: 'lastName',
        label: 'Last Name',
    },
    {
        key: 'email',
        label: 'Email',
    },
    {
        key: 'dob',
        label: 'Date of Birth',
    },
];

const Users = () => {
    const {
        data: usersPage,
        isLoading: isUsersPageLoading,
    } = useGetAllUsersQuery();

    return (
        <div className="pt-12 container">
            <h1 className="text-4xl text-center">
                Users
            </h1>

            <div className="pt-8">
                <Table
                    idKey="_id"
                    columns={columns}
                    rows={usersPage?.docs ?? []}
                    isLoading={isUsersPageLoading}
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                color="primary"
                                page={usersPage?.meta.page}
                                total={usersPage?.meta.totalDocs ?? 1}
                                isDisabled={isUsersPageLoading}
                                // onChange={(page) => setQuery((query) => ({
                                //     ...query,
                                //     page,
                                // }))}
                                isCompact
                                // showControls
                                showShadow
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default Users;
