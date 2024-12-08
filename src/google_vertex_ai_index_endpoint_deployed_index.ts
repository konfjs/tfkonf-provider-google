import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleVertexAiIndexEndpointDeployedIndexArgsAutomaticResources {
}

export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResourcesMachineSpec {
  machine_type?: string;
}

export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResources {
  min_replica_count: number;
  machine_spec: GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResourcesMachineSpec;
}

export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfigAuthProvider {
  allowed_issuers?: string[];
  audiences?: string[];
}

export interface GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfig {
  auth_provider?: GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfigAuthProvider;
}

export interface GoogleVertexAiIndexEndpointDeployedIndexArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleVertexAiIndexEndpointDeployedIndexArgs {
  deployed_index_id: string;
  deployment_group?: string;
  display_name?: string;
  enable_access_logging?: boolean;
  index: string;
  index_endpoint: string;
  reserved_ip_ranges?: string[];
  automatic_resources?: GoogleVertexAiIndexEndpointDeployedIndexArgsAutomaticResources;
  dedicated_resources?: GoogleVertexAiIndexEndpointDeployedIndexArgsDedicatedResources;
  deployed_index_auth_config?: GoogleVertexAiIndexEndpointDeployedIndexArgsDeployedIndexAuthConfig;
  timeouts?: GoogleVertexAiIndexEndpointDeployedIndexArgsTimeouts;
}

export class google_vertex_ai_index_endpoint_deployed_index extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleVertexAiIndexEndpointDeployedIndexArgs) {
    const meta = {automatic_resources:{isBlock:true},dedicated_resources:{isBlock:true,machine_spec:{isBlock:true}},deployed_index_auth_config:{isBlock:true,auth_provider:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_vertex_ai_index_endpoint_deployed_index", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get deployed_index_id(): string {
    return `${this.resourceType}.${this.resourceName}.deployed_index_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get index(): string {
    return `${this.resourceType}.${this.resourceName}.index`;
  }

  get index_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.index_endpoint`;
  }

  get index_sync_time(): string {
    return `${this.resourceType}.${this.resourceName}.index_sync_time`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get private_endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.private_endpoints`;
  }
}
