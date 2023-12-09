function Table() {
  const data = [
    {
      username: "rafyakbar",
      email: "rafyakbar02@yahoo.mail",
      itemQty: 10,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "adamdriver",
      email: "adamdriver@mail.mail",
      itemQty: 8,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "thisisit",
      email: "randomperson@yahoo.mail",
      itemQty: 3,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "wilex",
      email: "wilex@mail.mail",
      itemQty: 10,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "full-iq-guy",
      email: "full-iq-guy@kahoot.mail",
      itemQty: 11,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "brocodes",
      email: "brocodes@mail.mail",
      itemQty: 8,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "helicopterpilot",
      email: "helicopterpilot@meta.mail",
      itemQty: 10,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
    {
      username: "georgeburdell",
      email: "georgeburdell@gatech.mail",
      itemQty: 8,
      storageUsed: "250 bytes",
      timeStamp: 1701981694,
    },
  ];

  const headers = Object.keys(data[0]);

  return (
    <div className="h-auto flex justify-center align-middle">
      <table className="border-gray-200 border-[1px] w-[750px] h-[450px]">
        <tr>
          {headers.map((header, index) => {
            return (
              <th key={index} className="border-b-[1px] border-gray-200">
                {header}
              </th>
            );
          })}
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className="text-center">{val.username}</td>
              <td className="text-center">{val.email}</td>
              <td className="text-center">{val.itemQty}</td>
              <td className="text-center">{val.storageUsed}</td>
              <td className="text-center">{val.timeStamp}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Table;
