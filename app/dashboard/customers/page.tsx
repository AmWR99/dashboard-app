import CustomersTable from "@/app/ui/customers/table";
import { CustomersTableSkeloton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'Customer'
}

const Page = async (props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) => {
  // const customers = await fetchCustomers();
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense key={query} fallback={<CustomersTableSkeloton/>}>
        <CustomersTable query={query}/>
      </Suspense>
    </div>
  )
};

export default Page;
