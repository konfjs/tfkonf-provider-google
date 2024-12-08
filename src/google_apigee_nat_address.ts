import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeNatAddressArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleApigeeNatAddressArgs {
  activate?: boolean;
  instance_id: string;
  name: string;
  timeouts?: GoogleApigeeNatAddressArgsTimeouts;
}

export class google_apigee_nat_address extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleApigeeNatAddressArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_nat_address", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get ip_address(): string {
    return `${this.resourceType}.${this.resourceName}.ip_address`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }
}
