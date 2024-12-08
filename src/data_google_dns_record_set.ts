import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDnsRecordSetArgs {
  managed_zone: string;
  name: string;
  project?: string;
  type: string;
}

export class data_google_dns_record_set extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDnsRecordSetArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_dns_record_set", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zone(): string {
    return `data.${this.resourceType}.${this.resourceName}.managed_zone`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get rrdatas(): string {
    return `data.${this.resourceType}.${this.resourceName}.rrdatas`;
  }

  get ttl(): string {
    return `data.${this.resourceType}.${this.resourceName}.ttl`;
  }

  get type(): string {
    return `data.${this.resourceType}.${this.resourceName}.type`;
  }
}
