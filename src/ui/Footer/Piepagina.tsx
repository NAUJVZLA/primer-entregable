import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationButton,
} from "@/assets/public/style/Styles-Piepagina";

function Piepagina() {
  return (
    <Pagination>
      <PaginationButton>
        <ChevronLeft size={16} />
      </PaginationButton>
      <span>Página 1 de 2</span>
      <PaginationButton>
        <ChevronRight size={16} />
      </PaginationButton>
    </Pagination>
  );
}

export default Piepagina;
