import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, ArrowDown, ArrowUp, X } from "phosphor-react";

import {
  CloseButton,
  Content,
  OverlayTransparent,
  TransactionType,
  TransactionTypeButton,
} from "./styles";

export default function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <OverlayTransparent />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição " required />
          <input type="number" placeholder="Preço " required />
          <input type="text" placeholder="Categoria " required />
          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown />
              Saída
            </TransactionTypeButton>
          </TransactionType>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
