import React, { useState } from 'react';
import { DataTableProps } from '../../types/dataTable';

export function DataTable<T>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const toggleRow = (row: T) => {
    const exists = selectedRows.includes(row);
    let updated;
    if (exists) {
      updated = selectedRows.filter(r => r !== row);
    } else {
      updated = [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  if (loading) return <p className="p-4 text-gray-500">Loading...</p>;
  if (!loading && data.length === 0) return <p className="p-4 text-gray-500">No data available</p>;

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {selectable && <th className="border border-gray-200 p-2"></th>}
          {columns.map(col => (
            <th key={String(col.key)} className="border border-gray-200 p-2 text-left">{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {selectable && (
              <td className="border border-gray-200 p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>
            )}
            {columns.map(col => (
              <td key={String(col.key)} className="border border-gray-200 p-2">
                {String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;