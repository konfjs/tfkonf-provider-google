import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsGethDetails {
  garbage_collection_mode?: string;
}

export interface GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsValidatorConfig {
  mev_relay_urls?: string[];
}

export interface GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetails {
  api_enable_admin?: boolean;
  api_enable_debug?: boolean;
  consensus_client?: string;
  execution_client?: string;
  network?: string;
  node_type?: string;
  geth_details?: GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsGethDetails;
  validator_config?: GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetailsValidatorConfig;
}

export interface GoogleBlockchainNodeEngineBlockchainNodesArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleBlockchainNodeEngineBlockchainNodesArgs {
  blockchain_node_id: string;
  blockchain_type?: string;
  labels?: { [key: string]: string };
  location: string;
  ethereum_details?: GoogleBlockchainNodeEngineBlockchainNodesArgsEthereumDetails;
  timeouts?: GoogleBlockchainNodeEngineBlockchainNodesArgsTimeouts;
}

export class google_blockchain_node_engine_blockchain_nodes extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBlockchainNodeEngineBlockchainNodesArgs) {
    const meta = {ethereum_details:{isBlock:true,geth_details:{isBlock:true},validator_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_blockchain_node_engine_blockchain_nodes", resourceName);
  }

  get blockchain_node_id(): string {
    return `${this.resourceType}.${this.resourceName}.blockchain_node_id`;
  }

  get connection_info(): string {
    return `${this.resourceType}.${this.resourceName}.connection_info`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
