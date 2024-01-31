import { Pagination } from "@mantine/core"

interface IPaginateProps {
    page: number
    total: number
    onChange?: (page: number) => void
    boundaries: number
    recordPerpage: number
    totalRecords: number
}

const Paginate = ({
    page,
    onChange,
    total,
    boundaries,
    recordPerpage,
    totalRecords,
}: IPaginateProps) => {
    return (
        <>
            {totalRecords > 0 && (
                <div className=" grid-cols-2 flex justify-between lg:mt-12 col-span-full">
                    <div>
                        <p className="text-[#B5B7C0] text-2md md:text-3md">
                            <span className="hidden md:inline-block font-semibold ">
                                Showing Results:
                            </span>
                            {/* {count === 1 ? (
                        <span> {totalRecords}</span>
                    ) : ( */}
                            <span>
                                {" "}
                                {recordPerpage > totalRecords
                                    ? 1
                                    : // : page === total
                                      // ? totalRecords + 1 - recordPerpage
                                      (page - 1) * recordPerpage + 1}
                                -
                                {page === total
                                    ? totalRecords
                                    : recordPerpage * page}{" "}
                            </span>
                            {/* )}{" "} */}
                            of {totalRecords} entries
                        </p>
                    </div>
                    {total > 0 && (
                        <div className="col-span">
                            <Pagination
                                boundaries={boundaries}
                                value={page}
                                onChange={onChange}
                                size="md"
                                //spacing="sm"
                                total={total}
                                color="#40D57B"
                                data-testid="paginate"
                                className="gap-0.5 md:gap-2 bg-[] "
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Paginate
