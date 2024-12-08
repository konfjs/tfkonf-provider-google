import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEdgecontainerVpnConnectionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEdgecontainerVpnConnectionArgsVpcProject {
  project_id?: string;
}

export interface GoogleEdgecontainerVpnConnectionArgs {
  cluster: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  nat_gateway_ip?: string;
  router?: string;
  vpc?: string;
  timeouts?: GoogleEdgecontainerVpnConnectionArgsTimeouts;
  vpc_project?: GoogleEdgecontainerVpnConnectionArgsVpcProject;
}

export class google_edgecontainer_vpn_connection extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEdgecontainerVpnConnectionArgs) {
    const meta = {timeouts:{isBlock:true},vpc_project:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_edgecontainer_vpn_connection", resourceName);
  }

  get cluster(): string {
    return `${this.resourceType}.${this.resourceName}.cluster`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get details(): string {
    return `${this.resourceType}.${this.resourceName}.details`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_high_availability(): string {
    return `${this.resourceType}.${this.resourceName}.enable_high_availability`;
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
