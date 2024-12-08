import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleDatastreamStaticIpsArgs {
  location: string;
  project?: string;
}

export class data_google_datastream_static_ips extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleDatastreamStaticIpsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_datastream_static_ips", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `data.${this.resourceType}.${this.resourceName}.location`;
  }

  get static_ips(): string {
    return `data.${this.resourceType}.${this.resourceName}.static_ips`;
  }
}
