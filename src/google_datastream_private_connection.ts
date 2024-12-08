import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDatastreamPrivateConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDatastreamPrivateConnectionArgsVpcPeeringConfig {
  subnet: string;
  vpc: string;
}

export interface GoogleDatastreamPrivateConnectionArgs {
  create_without_validation?: boolean;
  display_name: string;
  labels?: { [key: string]: string };
  location: string;
  private_connection_id: string;
  timeouts?: GoogleDatastreamPrivateConnectionArgsTimeouts;
  vpc_peering_config: GoogleDatastreamPrivateConnectionArgsVpcPeeringConfig;
}

export class google_datastream_private_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDatastreamPrivateConnectionArgs) {
    const meta = {timeouts:{isBlock:true},vpc_peering_config:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_datastream_private_connection", resourceName);
  }

  get display_name(): string {
    return `${this.resourceType}.${this.resourceName}.display_name`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get error(): string {
    return `${this.resourceType}.${this.resourceName}.error`;
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

  get private_connection_id(): string {
    return `${this.resourceType}.${this.resourceName}.private_connection_id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
