import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataFusionInstanceArgsAccelerators {
  accelerator_type: string;
  state: string;
}

export interface GoogleDataFusionInstanceArgsCryptoKeyConfig {
  key_reference: string;
}

export interface GoogleDataFusionInstanceArgsEventPublishConfig {
  enabled: boolean;
  topic: string;
}

export interface GoogleDataFusionInstanceArgsNetworkConfigPrivateServiceConnectConfig {
  network_attachment?: string;
  unreachable_cidr_block?: string;
}

export interface GoogleDataFusionInstanceArgsNetworkConfig {
  connection_type?: string;
  ip_allocation?: string;
  network?: string;
  private_service_connect_config?: GoogleDataFusionInstanceArgsNetworkConfigPrivateServiceConnectConfig;
}

export interface GoogleDataFusionInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataFusionInstanceArgs {
  dataproc_service_account?: string;
  description?: string;
  display_name?: string;
  enable_rbac?: boolean;
  enable_stackdriver_logging?: boolean;
  enable_stackdriver_monitoring?: boolean;
  labels?: { [key: string]: string };
  name: string;
  private_instance?: boolean;
  type: string;
  accelerators?: GoogleDataFusionInstanceArgsAccelerators[];
  crypto_key_config?: GoogleDataFusionInstanceArgsCryptoKeyConfig;
  event_publish_config?: GoogleDataFusionInstanceArgsEventPublishConfig;
  network_config?: GoogleDataFusionInstanceArgsNetworkConfig;
  timeouts?: GoogleDataFusionInstanceArgsTimeouts;
}

export class google_data_fusion_instance extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataFusionInstanceArgs) {
    const meta = {accelerators:{isBlock:true},crypto_key_config:{isBlock:true},event_publish_config:{isBlock:true},network_config:{isBlock:true,private_service_connect_config:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_fusion_instance", resourceName);
  }

  get api_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.api_endpoint`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get gcs_bucket(): string {
    return `${this.resourceType}.${this.resourceName}.gcs_bucket`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get options(): string {
    return `${this.resourceType}.${this.resourceName}.options`;
  }

  get p4_service_account(): string {
    return `${this.resourceType}.${this.resourceName}.p4_service_account`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get service_endpoint(): string {
    return `${this.resourceType}.${this.resourceName}.service_endpoint`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_message(): string {
    return `${this.resourceType}.${this.resourceName}.state_message`;
  }

  get tenant_project_id(): string {
    return `${this.resourceType}.${this.resourceName}.tenant_project_id`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get version(): string {
    return `${this.resourceType}.${this.resourceName}.version`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
