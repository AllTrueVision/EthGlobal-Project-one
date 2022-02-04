/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MolochSummonerInterface extends ethers.utils.Interface {
  functions: {
    "summonMoloch(address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256[])": FunctionFragment;
    "template()": FunctionFragment;
    "daos(address)": FunctionFragment;
    "registerDao(address,string,string,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "summonMoloch",
    values: [
      string[],
      string[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "template", values?: undefined): string;
  encodeFunctionData(functionFragment: "daos", values: [string]): string;
  encodeFunctionData(
    functionFragment: "registerDao",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "summonMoloch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "template", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerDao",
    data: BytesLike
  ): Result;

  events: {
    "SummonComplete(address,address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256[])": EventFragment;
    "Register(uint256,address,string,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SummonComplete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Register"): EventFragment;
}

export class MolochSummoner extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MolochSummonerInterface;

  functions: {
    summonMoloch(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "summonMoloch(address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256[])"(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    template(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "template()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    daos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "daos(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    registerDao(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "registerDao(address,string,string,uint256)"(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  summonMoloch(
    _summoner: string[],
    _approvedTokens: string[],
    _periodDuration: BigNumberish,
    _votingPeriodLength: BigNumberish,
    _gracePeriodLength: BigNumberish,
    _proposalDeposit: BigNumberish,
    _dilutionBound: BigNumberish,
    _processingReward: BigNumberish,
    _summonerShares: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "summonMoloch(address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256[])"(
    _summoner: string[],
    _approvedTokens: string[],
    _periodDuration: BigNumberish,
    _votingPeriodLength: BigNumberish,
    _gracePeriodLength: BigNumberish,
    _proposalDeposit: BigNumberish,
    _dilutionBound: BigNumberish,
    _processingReward: BigNumberish,
    _summonerShares: BigNumberish[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  template(overrides?: CallOverrides): Promise<string>;

  "template()"(overrides?: CallOverrides): Promise<string>;

  daos(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "daos(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  registerDao(
    _daoAdress: string,
    _daoTitle: string,
    _http: string,
    _version: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "registerDao(address,string,string,uint256)"(
    _daoAdress: string,
    _daoTitle: string,
    _http: string,
    _version: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    summonMoloch(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    "summonMoloch(address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256[])"(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<string>;

    template(overrides?: CallOverrides): Promise<string>;

    "template()"(overrides?: CallOverrides): Promise<string>;

    daos(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "daos(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    registerDao(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "registerDao(address,string,string,uint256)"(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    SummonComplete(
      moloch: string | null,
      summoner: null,
      tokens: null,
      summoningTime: null,
      periodDuration: null,
      votingPeriodLength: null,
      gracePeriodLength: null,
      proposalDeposit: null,
      dilutionBound: null,
      processingReward: null,
      summonerShares: null
    ): EventFilter;

    Register(
      daoIdx: null,
      moloch: null,
      title: null,
      http: null,
      version: null
    ): EventFilter;
  };

  estimateGas: {
    summonMoloch(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "summonMoloch(address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256[])"(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    template(overrides?: CallOverrides): Promise<BigNumber>;

    "template()"(overrides?: CallOverrides): Promise<BigNumber>;

    daos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "daos(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerDao(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "registerDao(address,string,string,uint256)"(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    summonMoloch(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "summonMoloch(address[],address[],uint256,uint256,uint256,uint256,uint256,uint256,uint256[])"(
      _summoner: string[],
      _approvedTokens: string[],
      _periodDuration: BigNumberish,
      _votingPeriodLength: BigNumberish,
      _gracePeriodLength: BigNumberish,
      _proposalDeposit: BigNumberish,
      _dilutionBound: BigNumberish,
      _processingReward: BigNumberish,
      _summonerShares: BigNumberish[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    template(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "template()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "daos(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerDao(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "registerDao(address,string,string,uint256)"(
      _daoAdress: string,
      _daoTitle: string,
      _http: string,
      _version: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
