/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface SmartMarginAccountFactoryInterface extends utils.Interface {
  functions: {
    "accounts(address)": FunctionFragment;
    "canUpgrade()": FunctionFragment;
    "getAccountOwner(address)": FunctionFragment;
    "getAccountsOwnedBy(address)": FunctionFragment;
    "implementation()": FunctionFragment;
    "newAccount()": FunctionFragment;
    "owner()": FunctionFragment;
    "removeUpgradability()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateAccountOwnership(address,address,address)": FunctionFragment;
    "upgradeAccountImplementation(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accounts"
      | "canUpgrade"
      | "getAccountOwner"
      | "getAccountsOwnedBy"
      | "implementation"
      | "newAccount"
      | "owner"
      | "removeUpgradability"
      | "transferOwnership"
      | "updateAccountOwnership"
      | "upgradeAccountImplementation"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "accounts", values: [string]): string;
  encodeFunctionData(
    functionFragment: "canUpgrade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountsOwnedBy",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newAccount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeUpgradability",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateAccountOwnership",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeAccountImplementation",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "accounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "canUpgrade", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccountOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountsOwnedBy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newAccount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeUpgradability",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateAccountOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeAccountImplementation",
    data: BytesLike
  ): Result;

  events: {
    "AccountImplementationUpgraded(address)": EventFragment;
    "NewAccount(address,address,bytes32)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AccountImplementationUpgraded"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AccountImplementationUpgradedEventObject {
  implementation: string;
}
export type AccountImplementationUpgradedEvent = TypedEvent<
  [string],
  AccountImplementationUpgradedEventObject
>;

export type AccountImplementationUpgradedEventFilter =
  TypedEventFilter<AccountImplementationUpgradedEvent>;

export interface NewAccountEventObject {
  creator: string;
  account: string;
  version: string;
}
export type NewAccountEvent = TypedEvent<
  [string, string, string],
  NewAccountEventObject
>;

export type NewAccountEventFilter = TypedEventFilter<NewAccountEvent>;

export interface OwnershipTransferredEventObject {
  user: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SmartMarginAccountFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SmartMarginAccountFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accounts(
      accounts: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exist: boolean }>;

    canUpgrade(overrides?: CallOverrides): Promise<[boolean]>;

    getAccountOwner(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAccountsOwnedBy(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    newAccount(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    removeUpgradability(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateAccountOwnership(
      _account: string,
      _newOwner: string,
      _oldOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    upgradeAccountImplementation(
      _implementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  accounts(accounts: string, overrides?: CallOverrides): Promise<boolean>;

  canUpgrade(overrides?: CallOverrides): Promise<boolean>;

  getAccountOwner(_account: string, overrides?: CallOverrides): Promise<string>;

  getAccountsOwnedBy(
    _owner: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  implementation(overrides?: CallOverrides): Promise<string>;

  newAccount(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  removeUpgradability(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateAccountOwnership(
    _account: string,
    _newOwner: string,
    _oldOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  upgradeAccountImplementation(
    _implementation: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    accounts(accounts: string, overrides?: CallOverrides): Promise<boolean>;

    canUpgrade(overrides?: CallOverrides): Promise<boolean>;

    getAccountOwner(
      _account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getAccountsOwnedBy(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    implementation(overrides?: CallOverrides): Promise<string>;

    newAccount(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    removeUpgradability(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateAccountOwnership(
      _account: string,
      _newOwner: string,
      _oldOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeAccountImplementation(
      _implementation: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccountImplementationUpgraded(address)"(
      implementation?: null
    ): AccountImplementationUpgradedEventFilter;
    AccountImplementationUpgraded(
      implementation?: null
    ): AccountImplementationUpgradedEventFilter;

    "NewAccount(address,address,bytes32)"(
      creator?: string | null,
      account?: string | null,
      version?: null
    ): NewAccountEventFilter;
    NewAccount(
      creator?: string | null,
      account?: string | null,
      version?: null
    ): NewAccountEventFilter;

    "OwnershipTransferred(address,address)"(
      user?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      user?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    accounts(accounts: string, overrides?: CallOverrides): Promise<BigNumber>;

    canUpgrade(overrides?: CallOverrides): Promise<BigNumber>;

    getAccountOwner(
      _account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAccountsOwnedBy(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    newAccount(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    removeUpgradability(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateAccountOwnership(
      _account: string,
      _newOwner: string,
      _oldOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    upgradeAccountImplementation(
      _implementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accounts(
      accounts: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canUpgrade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccountOwner(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAccountsOwnedBy(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newAccount(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeUpgradability(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateAccountOwnership(
      _account: string,
      _newOwner: string,
      _oldOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    upgradeAccountImplementation(
      _implementation: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
