import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDiscoveryEngineChatEngineArgsChatEngineConfigAgentCreationConfig {
  business?: string;
  default_language_code: string;
  location?: string;
  time_zone: string;
}

export interface GoogleDiscoveryEngineChatEngineArgsChatEngineConfig {
  dialogflow_agent_to_link?: string;
  agent_creation_config?: GoogleDiscoveryEngineChatEngineArgsChatEngineConfigAgentCreationConfig;
}

export interface GoogleDiscoveryEngineChatEngineArgsCommonConfig {
  company_name?: string;
}

export interface GoogleDiscoveryEngineChatEngineArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDiscoveryEngineChatEngineArgs {
  collection_id: string;
  data_store_ids: string[];
  display_name: string;
  engine_id: string;
  industry_vertical?: string;
  location: string;
  chat_engine_config: GoogleDiscoveryEngineChatEngineArgsChatEngineConfig;
  common_config?: GoogleDiscoveryEngineChatEngineArgsCommonConfig;
  timeouts?: GoogleDiscoveryEngineChatEngineArgsTimeouts;
}

export class google_discovery_engine_chat_engine extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDiscoveryEngineChatEngineArgs) {
    const meta = {chat_engine_config:{isBlock:true,agent_creation_config:{isBlock:true}},common_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_discovery_engine_chat_engine", resourceName);
  }

  get chat_engine_metadata(): string {
    return `${this.resourceType}.${this.resourceName}.chat_engine_metadata`;
  }

  get collection_id(): string {
    return `${this.resourceType}.${this.resourceName}.collection_id`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get data_store_ids(): string {
    return `${this.resourceType}.${this.resourceName}.data_store_ids`;
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get engine_id(): string {
    return `${this.resourceType}.${this.resourceName}.engine_id`;
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

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
