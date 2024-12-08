import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeInstanceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeInstanceArgs {
  description?: string;
  disk_encryption_key_name?: string;
  display_name?: string;
  ip_range?: string;
  location: string;
  name: string;
  org_id: string;
  timeouts?: GoogleApigeeInstanceArgsTimeouts;
}

export class google_apigee_instance extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeInstanceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_instance", resourceName);
  }

  get consumer_accept_list(): string {
    return `${this.resourceType}.${this.resourceName}.consumer_accept_list`;
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
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

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get peering_cidr_range(): string {
    return `${this.resourceType}.${this.resourceName}.peering_cidr_range`;
  }

  get port(): string {
    return `${this.resourceType}.${this.resourceName}.port`;
  }

  get service_attachment(): string {
    return `${this.resourceType}.${this.resourceName}.service_attachment`;
  }
}
